import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AliasKindSchema } from './AliasKindSchema';
import { EnumAliasKindFieldUpdateOperationsInputSchema } from './EnumAliasKindFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CompanyUpdateOneRequiredWithoutCompanyAliasNestedInputSchema } from './CompanyUpdateOneRequiredWithoutCompanyAliasNestedInputSchema';

export const CompanyAliasUpdateInputSchema: z.ZodType<Prisma.CompanyAliasUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => AliasKindSchema), z.lazy(() => EnumAliasKindFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  valueNorm: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutCompanyAliasNestedInputSchema).optional(),
});

export default CompanyAliasUpdateInputSchema;
