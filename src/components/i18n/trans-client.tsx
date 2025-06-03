"use client";

import { JSXElementConstructor, ReactElement, ReactNode } from "react";
import { Trans, useTranslation } from "react-i18next";

type Props = {
  namespace: string;
  i18nKey: string;
  values: Record<string, string | number>;
  components?:
    | ReactNode[]
    | Element[]
    | JSXElementConstructor<any>[]
    | ReactElement<any>[];
  className?: string;
};

function TransClient({
  namespace,
  i18nKey,
  values,
  components,
  className,
}: Props) {
  const { t } = useTranslation(namespace);
  return (
    <Trans
      t={t}
      i18nKey={i18nKey}
      values={values}
      // @ts-ignore
      components={components}
      className={className}
    />
  );
}

export default TransClient;
