import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryWhereInputSchema } from './ClauseCategoryWhereInputSchema';
import { ClauseCategoryUpdateWithoutTriggerInputSchema } from './ClauseCategoryUpdateWithoutTriggerInputSchema';
import { ClauseCategoryUncheckedUpdateWithoutTriggerInputSchema } from './ClauseCategoryUncheckedUpdateWithoutTriggerInputSchema';

export const ClauseCategoryUpdateToOneWithWhereWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseCategoryUpdateToOneWithWhereWithoutTriggerInput> = z.strictObject({
  where: z.lazy(() => ClauseCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClauseCategoryUpdateWithoutTriggerInputSchema), z.lazy(() => ClauseCategoryUncheckedUpdateWithoutTriggerInputSchema) ]),
});

export default ClauseCategoryUpdateToOneWithWhereWithoutTriggerInputSchema;
