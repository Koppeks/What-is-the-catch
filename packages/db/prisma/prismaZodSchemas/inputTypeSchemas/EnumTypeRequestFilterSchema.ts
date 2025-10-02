import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypeRequestSchema } from './TypeRequestSchema';
import { NestedEnumTypeRequestFilterSchema } from './NestedEnumTypeRequestFilterSchema';

export const EnumTypeRequestFilterSchema: z.ZodType<Prisma.EnumTypeRequestFilter> = z.strictObject({
  equals: z.lazy(() => TypeRequestSchema).optional(),
  in: z.lazy(() => TypeRequestSchema).array().optional(),
  notIn: z.lazy(() => TypeRequestSchema).array().optional(),
  not: z.union([ z.lazy(() => TypeRequestSchema), z.lazy(() => NestedEnumTypeRequestFilterSchema) ]).optional(),
});

export default EnumTypeRequestFilterSchema;
