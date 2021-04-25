class CreateEnableUuids < ActiveRecord::Migration[5.2]
  def change
    create_table :enable_uuids do |t|
      enable_extension 'pgcrypto' unless extension_enabled?("pgcrypto")
    end
  end
end
