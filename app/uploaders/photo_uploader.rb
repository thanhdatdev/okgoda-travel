require "mini_magick"
class PhotoUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  def default_url(*args)
    # For Rails 3.1+ asset pipeline compatibility:
    'default.png'
    # image_path("uploads/" + ["tours", "default.png"].compact.join('_'))
  end

  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [50, 50]
  # end

  version :avatar do
    process :auto_orient
    process :resize_to_fit => [25, 25]
  end

  version :thumb do
    process :auto_orient
    process :resize_to_fit => [800, 534]
  end

  version :slider do
    process :auto_orient
    process :resize_to_fit => [800, 487]
  end

  def auto_orient
    manipulate! do |img|
      img = img.auto_orient
    end
  end

  # Add an allowlist of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_allowlist
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end
  def move_to_cache
    true
  end

  def move_to_store
    true
  end

  def cache_dir
    '/tmp/okgoda-cache'
  end
end
