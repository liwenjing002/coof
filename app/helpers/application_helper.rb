module ApplicationHelper
	# A simple way to show error messages for the current devise resource. If you need
  # to customize this method, you can either overwrite it in your application helpers or
  # copy the views to your application.
  #
  # This method is intended to stay simple and it is unlikely that we are going to change
  # it to add more behavior or options.
  def devise_error_messages_new name
    return "" if resource.errors.empty?

    if resource.errors[name].presence

    messages = resource.errors[name].join(", ")

	end
    
    html = <<-HTML
    <span id="err-#{name}" class="help-block alert-red">#{messages}</span>
    HTML

    html.html_safe
  end	
end
