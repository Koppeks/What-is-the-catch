import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';

export const SectionNullableScalarRelationFilterSchema: z.ZodType<Prisma.SectionNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => SectionWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SectionWhereInputSchema).optional().nullable(),
});

export default SectionNullableScalarRelationFilterSchema;
