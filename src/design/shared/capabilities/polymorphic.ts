import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from "react";

export type AsProp<E extends ElementType> = {
  as?: E;
};

export type PropsOf<E extends ElementType> = ComponentPropsWithoutRef<E>;

export type PolymorphicRef<E extends ElementType> = ComponentPropsWithRef<E>["ref"];

export type PolymorphicProps<E extends ElementType, P = object> = P &
  Omit<PropsOf<E>, keyof P | "as"> &
  AsProp<E>;

export type PolymorphicComponentPropsWithRef<E extends ElementType, P = object> =
  PolymorphicProps<E, P> & {
    ref?: PolymorphicRef<E>;
  };
