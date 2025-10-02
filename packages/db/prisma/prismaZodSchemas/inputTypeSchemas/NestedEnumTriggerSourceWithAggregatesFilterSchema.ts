import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTriggerSourceFilterSchema } from './NestedEnumTriggerSourceFilterSchema';

export const NestedEnumTriggerSourceWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTriggerSourceWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => TriggerSourceSchema).optional(),
  in: z.lazy(() => TriggerSourceSchema).array().optional(),
  notIn: z.lazy(() => TriggerSourceSchema).array().optional(),
  not: z.union([ z.lazy(() => TriggerSourceSchema), z.lazy(() => NestedEnumTriggerSourceWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTriggerSourceFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTriggerSourceFilterSchema).optional(),
});

export default NestedEnumTriggerSourceWithAggregatesFilterSchema;
