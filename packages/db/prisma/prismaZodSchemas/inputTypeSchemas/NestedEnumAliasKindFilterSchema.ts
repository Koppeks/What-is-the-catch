import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';

export const NestedEnumAliasKindFilterSchema: z.ZodType<Prisma.NestedEnumAliasKindFilter> = z.object({
  equals: z.lazy(() => AliasKindSchema).optional(),
  in: z.lazy(() => AliasKindSchema).array().optional(),
  notIn: z.lazy(() => AliasKindSchema).array().optional(),
  not: z.union([ z.lazy(() => AliasKindSchema),z.lazy(() => NestedEnumAliasKindFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedEnumAliasKindFilter>;

export default NestedEnumAliasKindFilterSchema;
