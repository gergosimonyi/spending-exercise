class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def serializable_hash(options={})
    options[:except] ||= []
    options[:except] << :created_at
    options[:except] << :updated_at

    super(options)
  end
end
