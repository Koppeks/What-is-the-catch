import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryWhereUniqueInputSchema } from './ClauseCategoryWhereUniqueInputSchema';
import { ClauseCategoryCreateWithoutTriggerInputSchema } from './ClauseCategoryCreateWithoutTriggerInputSchema';
import { ClauseCategoryUncheckedCreateWithoutTriggerInputSchema } from './ClauseCategoryUncheckedCreateWithoutTriggerInputSchema';

export const ClauseCategoryCreateOrConnectWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseCategoryCreateOrConnectWithoutTriggerInput> = z.strictObject({
  where: z.lazy(() => ClauseCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCategoryCreateWithoutTriggerInputSchema), z.lazy(() => ClauseCategoryUncheckedCreateWithoutTriggerInputSchema) ]),
});

export default ClauseCategoryCreateOrConnectWithoutTriggerInputSchema;
