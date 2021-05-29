require_relative 'boot'

require 'rails/all'

require 'carrierwave'

require 'carrierwave/orm/activerecord'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module OkgodaTravel
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    config.assets.initialize_on_precompile = false

    config.generators do |g|
      g.orm :active_record, primary_key_type: :uuid
    end

    Rails.application.config_for(:secrets).each do |key, value|
      ENV[key.to_s] = value
    end

    config.exceptions_app = self.routes
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
