class Api::ThingsController < ApplicationController

  def index
    render json: Thing.all
  end
  
  def create
    @thing = Thing.new(thing_params)
    if @thing.save
    render json: @thing
    else
    render json: { errors: @thing.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    @thing = Thing.find(params[:id])
    if @thing.update(thing_params)
    render json: @thing
    else
    render json: { errors: @thing.errors }, status: :unprocessable_entity
    end
  end
  
  def destroy
    Thing.find(params[:id]).destroy
    render json: { message: 'The thing has been deleted!'}
  end
  
  private
  
  def thing_params
    params.require(:thing).permit(:name, :description, :url, :collection_id)
  end
  
end