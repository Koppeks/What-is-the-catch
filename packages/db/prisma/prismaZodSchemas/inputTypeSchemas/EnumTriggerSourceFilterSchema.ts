import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { NestedEnumTriggerSourceFilterSchema } from './NestedEnumTriggerSourceFilterSchema';

export const EnumTriggerSourceFilterSchema: z.ZodType<Prisma.EnumTriggerSourceFilter> = z.object({
  equals: z.lazy(() => TriggerSourceSchema).optional(),
  in: z.lazy(() => TriggerSourceSchema).array().optional(),
  notIn: z.lazy(() => TriggerSourceSchema).array().optional(),
  not: z.union([ z.lazy(() => TriggerSourceSchema),z.lazy(() => NestedEnumTriggerSourceFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.EnumTriggerSourceFilter>;

export default EnumTriggerSourceFilterSchema;
