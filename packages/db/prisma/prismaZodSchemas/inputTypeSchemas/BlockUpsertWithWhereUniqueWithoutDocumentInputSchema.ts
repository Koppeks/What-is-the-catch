import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateWithoutDocumentInputSchema } from './BlockUpdateWithoutDocumentInputSchema';
import { BlockUncheckedUpdateWithoutDocumentInputSchema } from './BlockUncheckedUpdateWithoutDocumentInputSchema';
import { BlockCreateWithoutDocumentInputSchema } from './BlockCreateWithoutDocumentInputSchema';
import { BlockUncheckedCreateWithoutDocumentInputSchema } from './BlockUncheckedCreateWithoutDocumentInputSchema';

export const BlockUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.BlockUpsertWithWhereUniqueWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BlockUpdateWithoutDocumentInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => BlockCreateWithoutDocumentInputSchema), z.lazy(() => BlockUncheckedCreateWithoutDocumentInputSchema) ]),
});

export default BlockUpsertWithWhereUniqueWithoutDocumentInputSchema;
