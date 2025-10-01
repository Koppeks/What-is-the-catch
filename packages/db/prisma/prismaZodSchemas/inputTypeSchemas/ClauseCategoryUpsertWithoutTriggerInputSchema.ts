import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryUpdateWithoutTriggerInputSchema } from './ClauseCategoryUpdateWithoutTriggerInputSchema';
import { ClauseCategoryUncheckedUpdateWithoutTriggerInputSchema } from './ClauseCategoryUncheckedUpdateWithoutTriggerInputSchema';
import { ClauseCategoryCreateWithoutTriggerInputSchema } from './ClauseCategoryCreateWithoutTriggerInputSchema';
import { ClauseCategoryUncheckedCreateWithoutTriggerInputSchema } from './ClauseCategoryUncheckedCreateWithoutTriggerInputSchema';
import { ClauseCategoryWhereInputSchema } from './ClauseCategoryWhereInputSchema';

export const ClauseCategoryUpsertWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseCategoryUpsertWithoutTriggerInput> = z.object({
  update: z.union([ z.lazy(() => ClauseCategoryUpdateWithoutTriggerInputSchema),z.lazy(() => ClauseCategoryUncheckedUpdateWithoutTriggerInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCategoryCreateWithoutTriggerInputSchema),z.lazy(() => ClauseCategoryUncheckedCreateWithoutTriggerInputSchema) ]),
  where: z.lazy(() => ClauseCategoryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCategoryUpsertWithoutTriggerInput>;

export default ClauseCategoryUpsertWithoutTriggerInputSchema;
