import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';
import { NestedEnumAliasKindWithAggregatesFilterSchema } from './NestedEnumAliasKindWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAliasKindFilterSchema } from './NestedEnumAliasKindFilterSchema';

export const EnumAliasKindWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAliasKindWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AliasKindSchema).optional(),
  in: z.lazy(() => AliasKindSchema).array().optional(),
  notIn: z.lazy(() => AliasKindSchema).array().optional(),
  not: z.union([ z.lazy(() => AliasKindSchema),z.lazy(() => NestedEnumAliasKindWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAliasKindFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAliasKindFilterSchema).optional()
}).strict() as z.ZodType<Prisma.EnumAliasKindWithAggregatesFilter>;

export default EnumAliasKindWithAggregatesFilterSchema;
