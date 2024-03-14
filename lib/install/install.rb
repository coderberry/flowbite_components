APPLICATION_LAYOUT_PATH = Rails.root.join("app/views/layouts/application.html.erb")
IMPORTMAP_BINSTUB = Rails.root.join("bin/importmap")
IMPORTMAP_CONFIG_PATH = Rails.root.join("config/importmap.rb")
STIMULUS_PATH = Rails.root.join("app/javascript/controllers/index.js")

if APPLICATION_LAYOUT_PATH.exist?
  say "Add Flowbite styles in application layout"
  insert_into_file APPLICATION_LAYOUT_PATH.to_s, "\n    <%= stylesheet_link_tag \"flowbite_components\" %>", before: /\s*<\/head>/

  if File.read(APPLICATION_LAYOUT_PATH).include?("<body>")
    say "Add Flowbite inline styles for <html> in application layout"
    gsub_file APPLICATION_LAYOUT_PATH.to_s, "<html", "<html style=\"<%= flowbite_html_styles %>\""

    say "Add Flowbite inline styles for <body> in application layout"
    gsub_file APPLICATION_LAYOUT_PATH.to_s, "<body>", "<body style=\"<%= flowbite_body_styles %>\">"
  else
    say "<body> tag is not found in application layout.", :red
    say "        Replace <html> with <html style=\"<%= flowbite_html_styles %>\"> in your custom layout."
    say "        Replace <body> with <body style=\"<%= flowbite_body_styles %>\"> in your custom layout."
  end
else
  say "Default application.html.erb is missing!", :red
  say "        1. Add <%= stylesheet_link_tag \"flowbite_components\" %> within the <head> tag in your custom layout."
  say "        2. Replace <html> with <html style=\"<%= flowbite_html_styles %>\"> in your custom layout."
  say "        3. Replace <body> with <body style=\"<%= flowbite_body_styles %>\"> in your custom layout."
end

if IMPORTMAP_BINSTUB.exist?
  importmaps = File.read(IMPORTMAP_CONFIG_PATH)

  unless importmaps.include?("@rails/request.js")
    say "Pin @rails/request.js dependency"
    run "bin/importmap pin @rails/request.js --download"
  end

  say "Pin polaris_view_components"
  append_to_file IMPORTMAP_CONFIG_PATH do
    %(pin "flowbite-components", to: "flowbite_components.js"\n)
  end
else
  package_json = File.read(Rails.root.join("package.json"))

  unless package_json.include?("@rails/request.js")
    say "Add @rails/request.js dependency"
    run "yarn add @rails/request.js"
  end

  say "Add flowbite-components package"
  run "yarn add flowbite-components"
end

if STIMULUS_PATH.exist?
  say "Add Flowbite Stimulus controllers"
  append_to_file STIMULUS_PATH do
    "\nimport { registerFlowbiteControllers } from \"flowbite-components\"\nregisterFlowbiteControllers(Stimulus)\n"
  end
else
  say "Default Stimulus location is missing: app/javascript/controllers/index.js", :red
  say "        Add to your Stimulus index.js:"
  say "            import { registerFlowbiteControllers } from \"flowbite-components\""
  say "            registerFlowbiteControllers(Stimulus)"
end
