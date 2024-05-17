import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

const imageUrlList = ["www.google.com", "www.iamge.com", "www.something.com"];

describe("ProductImageGallery.test", () => {
  it("should display nothing if image array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    screen.debug();
    expect(container).toBeEmptyDOMElement();
  });

  it("should display list of urls", () => {
    const { container } = render(
      <ProductImageGallery imageUrls={imageUrlList} />
    );
    screen.debug();

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);

    imageUrlList.forEach((url, idx) => {
      expect(images[idx]).toHaveAttribute("src", url);
    });
  });
});
