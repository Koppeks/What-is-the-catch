import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';
import { DocumentTriggerUpdateWithoutTriggerInputSchema } from './DocumentTriggerUpdateWithoutTriggerInputSchema';
import { DocumentTriggerUncheckedUpdateWithoutTriggerInputSchema } from './DocumentTriggerUncheckedUpdateWithoutTriggerInputSchema';

export const DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInput> = z.strictObject({
  where: z.lazy(() => DocumentTriggerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DocumentTriggerUpdateWithoutTriggerInputSchema), z.lazy(() => DocumentTriggerUncheckedUpdateWithoutTriggerInputSchema) ]),
});

export default DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInputSchema;
