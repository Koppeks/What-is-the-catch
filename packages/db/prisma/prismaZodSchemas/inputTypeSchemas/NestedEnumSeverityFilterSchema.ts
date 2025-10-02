import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';

export const NestedEnumSeverityFilterSchema: z.ZodType<Prisma.NestedEnumSeverityFilter> = z.strictObject({
  equals: z.lazy(() => SeveritySchema).optional(),
  in: z.lazy(() => SeveritySchema).array().optional(),
  notIn: z.lazy(() => SeveritySchema).array().optional(),
  not: z.union([ z.lazy(() => SeveritySchema), z.lazy(() => NestedEnumSeverityFilterSchema) ]).optional(),
});

export default NestedEnumSeverityFilterSchema;
