# frozen_string_literal: true

module Flowbite
  module ComponentTestHelpers
    include ActionView::Helpers::TagHelper
    include ViewComponent::TestHelpers
    include Flowbite::ViewHelper
  end
end
