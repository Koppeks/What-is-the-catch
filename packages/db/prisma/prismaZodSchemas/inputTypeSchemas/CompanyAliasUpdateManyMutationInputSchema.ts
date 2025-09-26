import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AliasKindSchema } from './AliasKindSchema';
import { EnumAliasKindFieldUpdateOperationsInputSchema } from './EnumAliasKindFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const CompanyAliasUpdateManyMutationInputSchema: z.ZodType<Prisma.CompanyAliasUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => AliasKindSchema),z.lazy(() => EnumAliasKindFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  valueNorm: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.CompanyAliasUpdateManyMutationInput>;

export default CompanyAliasUpdateManyMutationInputSchema;
