import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerSourceSchema } from './TriggerSourceSchema';

export const NestedEnumTriggerSourceFilterSchema: z.ZodType<Prisma.NestedEnumTriggerSourceFilter> = z.strictObject({
  equals: z.lazy(() => TriggerSourceSchema).optional(),
  in: z.lazy(() => TriggerSourceSchema).array().optional(),
  notIn: z.lazy(() => TriggerSourceSchema).array().optional(),
  not: z.union([ z.lazy(() => TriggerSourceSchema), z.lazy(() => NestedEnumTriggerSourceFilterSchema) ]).optional(),
});

export default NestedEnumTriggerSourceFilterSchema;
