class Api::ReviewsController < ApplicationController

  def index
    render json: Review.all
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @review.destroy
    render json: { message: 'Review has been removed'}
  end

  private

    def review_params
      params.require(:review).permit(:score, :title, :comment, :user_id, :thing_id)
    end
end