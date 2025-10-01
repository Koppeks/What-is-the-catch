import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';
import { DocumentTriggerUpdateWithoutTriggerInputSchema } from './DocumentTriggerUpdateWithoutTriggerInputSchema';
import { DocumentTriggerUncheckedUpdateWithoutTriggerInputSchema } from './DocumentTriggerUncheckedUpdateWithoutTriggerInputSchema';

export const DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInput> = z.object({
  where: z.lazy(() => DocumentTriggerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DocumentTriggerUpdateWithoutTriggerInputSchema),z.lazy(() => DocumentTriggerUncheckedUpdateWithoutTriggerInputSchema) ]),
}).strict() as z.ZodType<Prisma.DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInput>;

export default DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInputSchema;
