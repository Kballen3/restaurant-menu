class Api::ItemsController < ApplicationController
    before_action :set_item, only: [:update, :destroy]

  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)
    if item.save 
      render json: item
    else
      render json: {errors: item.errors}, status: :unprocessable_entity
    end
  end

  def update
    @item.update(name:'')
    render json: item
  end

  def destroy
    @item.destroy
    render json: {message: 'Item Trashed'}

  end

  private

    def item_params
      params.require(:item).permit(:name)
    end

    def set_item
      @item.find(params[:id])
    end

end
end
