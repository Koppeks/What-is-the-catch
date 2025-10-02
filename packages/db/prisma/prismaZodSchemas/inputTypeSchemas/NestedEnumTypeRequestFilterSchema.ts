import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypeRequestSchema } from './TypeRequestSchema';

export const NestedEnumTypeRequestFilterSchema: z.ZodType<Prisma.NestedEnumTypeRequestFilter> = z.strictObject({
  equals: z.lazy(() => TypeRequestSchema).optional(),
  in: z.lazy(() => TypeRequestSchema).array().optional(),
  notIn: z.lazy(() => TypeRequestSchema).array().optional(),
  not: z.union([ z.lazy(() => TypeRequestSchema), z.lazy(() => NestedEnumTypeRequestFilterSchema) ]).optional(),
});

export default NestedEnumTypeRequestFilterSchema;
