require "rails/engine"
require "view_component"
require "view_component/version"

module Flowbite
  module Components
    class Engine < ::Rails::Engine
      isolate_namespace Flowbite::Components

      config.autoload_paths = %W[
        #{root}/app/components
        #{root}/app/helpers
      ]

      initializer "flowbite_components.assets" do |app|
        if app.config.respond_to?(:assets)
          app.config.assets.precompile += %w[
            flowbite_components.js flowbite_components.css
          ]
        end
      end

      initializer "flowbite_components.importmap", before: "importmap" do |app|
        if app.config.respond_to?(:importmap) && app.config.importmap.has_key?(:cache_sweepers)
          app.config.importmap.cache_sweepers << Engine.root.join("app/assets/javascripts")
        end
      end

      initializer "flowbite_components.helpers" do
        ActiveSupport.on_load(:action_controller_base) do
          helper Flowbite::ViewHelper
          helper Flowbite::UrlHelper
        end
      end
    end
  end
end
