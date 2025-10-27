import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HitterWhereInputSchema } from './HitterWhereInputSchema';

export const HitterScalarRelationFilterSchema: z.ZodType<Prisma.HitterScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => HitterWhereInputSchema).optional(),
  isNot: z.lazy(() => HitterWhereInputSchema).optional(),
});

export default HitterScalarRelationFilterSchema;
