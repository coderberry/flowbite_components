# frozen_string_literal: true

class ButtonPreview < ViewComponent::Preview
  def default
    render(Flowbite::Button.new)
  end
end
