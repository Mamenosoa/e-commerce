'use client'
import {extendVariants, Button} from "@nextui-org/react";

export const ButtonCutsom = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      active: " bg-[var(--bg-1)] text-white ",
      normal:" text-black bg-white hover:text-white hover:bg-[var(--bg-1)]"
    },
}
});