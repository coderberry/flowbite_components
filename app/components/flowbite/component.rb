# frozen_string_literal: true

module Flowbite
  class Component < ViewComponent::Base
    include StyleVariants

    include ClassNameHelper
    include FetchOrFallbackHelper
    include OptionHelper
    include StylesListHelper
    include ViewHelper
  end
end
