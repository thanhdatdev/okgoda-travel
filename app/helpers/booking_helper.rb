module BookingHelper
  def errors_for(model, attribute)
    if model.errors[attribute].any?
      content_tag :span, class: 'error' do
        attribute.to_s.humanize + ' ' + model.errors[attribute].to_sentence
      end
    end
  end
end
