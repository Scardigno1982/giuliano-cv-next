"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  const [showSecondImage, setShowSecondImage] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondImage(true); // Mostrar la segunda imagen después de 5 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []);

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-xl",
        className,
      )}
      {...props}
    >
      {children}
      {/* Mostrar la segunda imagen después de 5 segundos */}
      {showSecondImage && (
        <AvatarPrimitive.Image
          src="/img/anteojos.png" // Cambia esta ruta por la de la segunda imagen
          alt="Superposed image"
          className={cn(
            "absolute left-0 top-0 z-10 h-4 w-4", // Quitar clases de borde y redondeo
            className,
          )}
        />
      )}
    </AvatarPrimitive.Root>
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-xl bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
