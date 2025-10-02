import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAliasKindFilterSchema } from './NestedEnumAliasKindFilterSchema';

export const NestedEnumAliasKindWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAliasKindWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AliasKindSchema).optional(),
  in: z.lazy(() => AliasKindSchema).array().optional(),
  notIn: z.lazy(() => AliasKindSchema).array().optional(),
  not: z.union([ z.lazy(() => AliasKindSchema), z.lazy(() => NestedEnumAliasKindWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAliasKindFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAliasKindFilterSchema).optional(),
});

export default NestedEnumAliasKindWithAggregatesFilterSchema;
