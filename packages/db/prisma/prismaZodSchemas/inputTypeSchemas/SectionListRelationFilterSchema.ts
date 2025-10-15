import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';

export const SectionListRelationFilterSchema: z.ZodType<Prisma.SectionListRelationFilter> = z.strictObject({
  every: z.lazy(() => SectionWhereInputSchema).optional(),
  some: z.lazy(() => SectionWhereInputSchema).optional(),
  none: z.lazy(() => SectionWhereInputSchema).optional(),
});

export default SectionListRelationFilterSchema;
