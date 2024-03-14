require "flowbite/components/codemods/v3_slot_setters"

namespace :flowbite_components do
  desc "Setup Flowbite::Components for the app"
  task :install do
    system "#{RbConfig.ruby} ./bin/rails app:template LOCATION=#{File.expand_path("../install/install.rb", __dir__)}"
  end

  task detect_legacy_slots: :environment do
    ARGV.each { |a| task a.to_sym {} }
    custom_paths = ARGV.compact.map { |path| Rails.root.join(path) }
    Flowbite::Components::Codemods::V3SlotSetters.new(view_path: custom_paths).call
  end

  task migrate_legacy_slots: :environment do
    ARGV.each { |a| task a.to_sym {} }
    custom_paths = ARGV.compact.map { |path| Rails.root.join(path) }
    Flowbite::Components::Codemods::V3SlotSetters.new(view_path: custom_paths, migrate: true).call
  end
end
