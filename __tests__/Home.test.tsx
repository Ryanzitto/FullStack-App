import { render, screen } from "@testing-library/react";

import Home from "@/app/(root)/page";

it("Should have templates", () => {
  render(<Home />);
});
