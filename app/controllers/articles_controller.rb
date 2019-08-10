class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    titles = []
    render :json => @articles
  end
  
  def create
    article = Article.new
    article.text = params[:text]
    article.title = params[:title]
    article.save
    render :json => article
  end

  private 
    def article_params
      params.require("id").permit(:title, :text)
    end
end
