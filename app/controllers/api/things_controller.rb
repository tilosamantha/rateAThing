class Api::ThingsController < ApplicationController

  def index
    render json: Thing.all
  end
  
  def create
    @thing = Thing.new(thing_params)
    thing = Thing.find(params[:id])
    thing.name = params[:name] ? params[:name]/ : user.name
    thing.description = params[:description] ? params[:description] : thing.description
    
    file = params[:file]
    
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        user.image = cloud_image['secure_url']
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
    
    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end
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