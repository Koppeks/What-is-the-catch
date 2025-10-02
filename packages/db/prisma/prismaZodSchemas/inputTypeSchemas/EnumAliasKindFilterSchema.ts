import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';
import { NestedEnumAliasKindFilterSchema } from './NestedEnumAliasKindFilterSchema';

export const EnumAliasKindFilterSchema: z.ZodType<Prisma.EnumAliasKindFilter> = z.strictObject({
  equals: z.lazy(() => AliasKindSchema).optional(),
  in: z.lazy(() => AliasKindSchema).array().optional(),
  notIn: z.lazy(() => AliasKindSchema).array().optional(),
  not: z.union([ z.lazy(() => AliasKindSchema), z.lazy(() => NestedEnumAliasKindFilterSchema) ]).optional(),
});

export default EnumAliasKindFilterSchema;
