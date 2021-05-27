class ErrorsController < ApplicationController
  unless Rails.application.config.consider_all_requests_local
    rescue_from ActionController::RoutingError, with: :render_canvas_404
    rescue_from ActionController::UnknownController, with: :render_404
    rescue_from AbstractController::ActionNotFound, with: :render_404
    rescue_from ActiveRecord::RecordNotFound, with: :render_404
    rescue_from ActiveResource::ForbiddenAccess, with: :render_403
    rescue_from CanCan::AccessDenied, with: :render_403
  end

  def render_404
    render status: 404
  end

  def render_canvas_404
    render template: 'errors/error_404', status: 404
  end

  def render_500(exception)
    render status: 500
  end

  def render_403(_exception)
    render status: 403
  end
end
