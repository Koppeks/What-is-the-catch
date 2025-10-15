import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';

export const SectionScalarRelationFilterSchema: z.ZodType<Prisma.SectionScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => SectionWhereInputSchema).optional(),
  isNot: z.lazy(() => SectionWhereInputSchema).optional(),
});

export default SectionScalarRelationFilterSchema;
