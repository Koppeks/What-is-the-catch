import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HitterWhereInputSchema } from './HitterWhereInputSchema';
import { HitterUpdateWithoutTriggerInputSchema } from './HitterUpdateWithoutTriggerInputSchema';
import { HitterUncheckedUpdateWithoutTriggerInputSchema } from './HitterUncheckedUpdateWithoutTriggerInputSchema';

export const HitterUpdateToOneWithWhereWithoutTriggerInputSchema: z.ZodType<Prisma.HitterUpdateToOneWithWhereWithoutTriggerInput> = z.strictObject({
  where: z.lazy(() => HitterWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HitterUpdateWithoutTriggerInputSchema), z.lazy(() => HitterUncheckedUpdateWithoutTriggerInputSchema) ]),
});

export default HitterUpdateToOneWithWhereWithoutTriggerInputSchema;
