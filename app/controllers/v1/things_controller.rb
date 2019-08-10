class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'some-thing',
        :guid => 'some-id'
      }
    ]}.to_json
    end
  end
