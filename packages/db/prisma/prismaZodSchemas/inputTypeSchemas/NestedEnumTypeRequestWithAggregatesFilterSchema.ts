import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypeRequestSchema } from './TypeRequestSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTypeRequestFilterSchema } from './NestedEnumTypeRequestFilterSchema';

export const NestedEnumTypeRequestWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTypeRequestWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => TypeRequestSchema).optional(),
  in: z.lazy(() => TypeRequestSchema).array().optional(),
  notIn: z.lazy(() => TypeRequestSchema).array().optional(),
  not: z.union([ z.lazy(() => TypeRequestSchema), z.lazy(() => NestedEnumTypeRequestWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTypeRequestFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTypeRequestFilterSchema).optional(),
});

export default NestedEnumTypeRequestWithAggregatesFilterSchema;
