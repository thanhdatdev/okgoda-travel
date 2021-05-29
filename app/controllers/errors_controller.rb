class ErrorsController < ApplicationController
  def render_404
    render status: 404
  end

  def render_canvas_404
    render template: 'errors/error_404', status: 404
  end

  def render_500
    render 'errors/error_500', status: 500
  end

  def render_403
    render 'errors/error_403', status: 403
  end
end
