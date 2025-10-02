import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerStateSchema } from './TriggerStateSchema';
import { NestedEnumTriggerStateWithAggregatesFilterSchema } from './NestedEnumTriggerStateWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTriggerStateFilterSchema } from './NestedEnumTriggerStateFilterSchema';

export const EnumTriggerStateWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTriggerStateWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => TriggerStateSchema).optional(),
  in: z.lazy(() => TriggerStateSchema).array().optional(),
  notIn: z.lazy(() => TriggerStateSchema).array().optional(),
  not: z.union([ z.lazy(() => TriggerStateSchema), z.lazy(() => NestedEnumTriggerStateWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTriggerStateFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTriggerStateFilterSchema).optional(),
});

export default EnumTriggerStateWithAggregatesFilterSchema;
