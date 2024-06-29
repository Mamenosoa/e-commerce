'use client'
import {extendVariants, Button} from "@nextui-org/react";

export const ButtonCutsom = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      active: "text-[#000000] border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white   ",
    },
}
});