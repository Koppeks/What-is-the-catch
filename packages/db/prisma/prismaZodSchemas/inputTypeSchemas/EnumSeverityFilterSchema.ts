import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { NestedEnumSeverityFilterSchema } from './NestedEnumSeverityFilterSchema';

export const EnumSeverityFilterSchema: z.ZodType<Prisma.EnumSeverityFilter> = z.object({
  equals: z.lazy(() => SeveritySchema).optional(),
  in: z.lazy(() => SeveritySchema).array().optional(),
  notIn: z.lazy(() => SeveritySchema).array().optional(),
  not: z.union([ z.lazy(() => SeveritySchema),z.lazy(() => NestedEnumSeverityFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.EnumSeverityFilter>;

export default EnumSeverityFilterSchema;
