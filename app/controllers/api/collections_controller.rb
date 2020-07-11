class Api::CollectionsController < ApplicationController
  
  def index
    render json: Collection.all
  end

  def create
    @collection = Collection.new(collection_params)
    if @collection.save
      render json: @collection
    else
      render json: {errors: @collection.errors}
    end
  end

  def update
    @collection = Collection.find(params[:id])
    if @collection.update(collection_params)
      render json: @collection
    else 
      render json: { errors: @collection.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Collection.find(params[:id]).destroy
    render json: { message: 'Collection has been deleted'}
  end


  private

  def collection_params
    params.require(:collection).permit(:name, :description, :user_id )
  end

end
